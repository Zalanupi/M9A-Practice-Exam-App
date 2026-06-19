import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  Award,
  Check,
  X,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";
import { Question, AnsweredQuestion } from "./types";
import { allQuestions } from "./questions";

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  // App States
  const [questions, setQuestions] = useState<Question[]>(() => {
    return shuffleArray(allQuestions).slice(0, 50);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);
  const [isExamFinished, setIsExamFinished] = useState(false);
  
  // Custom interactive diagnostics states
  const [expandedIncorrectId, setExpandedIncorrectId] = useState<string | null>(null);
  const [filterMode, setFilterMode] = useState<"all" | "incorrect" | "correct">("all");

  const currentQuestion = questions[currentIndex];

  // Action handlers
  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return; // Locked
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;

    const isCorrect = selectedOption === currentQuestion.correctIndex;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const currentAnswer: AnsweredQuestion = {
      id: currentQuestion.id,
      chosenIndex: selectedOption,
      correctIndex: currentQuestion.correctIndex,
      isCorrect
    };

    setAnswers((prev) => [...prev, currentAnswer]);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < 49) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsExamFinished(true);
    }
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(allQuestions).slice(0, 50));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setAnswers([]);
    setIsExamFinished(false);
    setExpandedIncorrectId(null);
    setFilterMode("all");
  };

  const toggleIncorrectExpand = (id: string) => {
    setExpandedIncorrectId((prev) => (prev === id ? null : id));
  };

  // Calculations
  const percentage = Math.round((score / 50) * 100);
  const totalMarks = score * 2;
  const isPassed = score >= 35; // 70% threshold (35 out of 50 correct)
  
  const incorrectAnswers = answers.filter((a) => !a.isCorrect);

  const getOptionLetter = (index: number) => {
    return ["A", "B", "C", "D"][index];
  };

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(circle_at_center,#1e293b_0%,#0f172a_100%)] text-slate-100 font-sans flex flex-col antialiased">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-[#1e293b]/90 backdrop-blur-md border-b border-[#334155] px-4 py-3 sm:py-4">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="bg-[#06b6d4] text-[#0f172a] p-2 rounded-xl shadow-xs">
              <GraduationCap className="h-5.5 w-5.5" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
                M9A Practice Exam
              </h1>
              <p className="text-xs text-[#06b6d4] font-semibold tracking-wide">Life Insurance & Structured ILPs</p>
            </div>
          </div>
          <button
            onClick={handleRestart}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#334155] text-xs font-semibold text-slate-300 hover:bg-[#334155] active:bg-slate-750 transition-colors uppercase tracking-wider"
          >
            <RefreshCw className="h-3.5 w-3.5 text-[#06b6d4]" />
            <span>Reset</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-4 sm:py-6 flex flex-col justify-start">
        {!isExamFinished ? (
          <div className="flex flex-col flex-1">
            {/* Status Line */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-3.5 mb-4 shadow-sm">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-slate-300 mb-1.5">
                <span className="flex items-center space-x-1">
                  <span className="text-[#06b6d4] font-bold">Question {currentIndex + 1}</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-slate-400">50</span>
                </span>
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md text-slate-200 border border-[#334155]">
                  Score: {totalMarks} Marks <span className="text-slate-400 font-normal">({score} Correct)</span>
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-[#334155] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#06b6d4] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / 50) * 100}%` }}
                />
              </div>
              <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                <span>Pass target: 35/50 (70%)</span>
                <span>Each question is worth 2 Marks</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-[#1e293b] border border-[#334155] rounded-2xl shadow-md p-4 sm:p-5 flex-1 flex flex-col h-full">
              {/* Question Reference Badge */}
              <div className="flex items-center justify-between mb-3.5 text-xs">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-bold bg-[#334155] text-[#06b6d4] uppercase tracking-wider text-[10px] border border-cyan-500/20">
                  Reference Quiz Set {currentQuestion.set}
                </span>
                <span className="inline-flex items-center text-[11px] text-slate-400 font-mono">
                  ID: {currentQuestion.id}
                </span>
              </div>

              {/* Question Body */}
              <h2 className="font-display font-medium text-slate-100 text-base sm:text-lg leading-relaxed mb-5">
                {currentQuestion.question}
              </h2>

              {/* Options Selector */}
              <div className="space-y-2.5 flex-1">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrectAnswer = idx === currentQuestion.correctIndex;
                  const showSuccess = isSubmitted && isCorrectAnswer;
                  const showDanger = isSubmitted && isSelected && !isCorrectAnswer;

                  let optionStyle = "border-2 border-transparent bg-[#334155] hover:bg-[#475569] text-slate-100";
                  let badgeStyle = "bg-slate-900 border border-[#475569]/60 text-[#94a3b8]";

                  if (isSelected && !isSubmitted) {
                    optionStyle = "border-2 border-[#06b6d4] bg-[#1e3a8a] text-white shadow-md shadow-cyan-950/30";
                    badgeStyle = "bg-[#06b6d4] text-[#0f172a] border-[#06b6d4] font-extrabold";
                  } else if (showSuccess) {
                    optionStyle = "border-2 border-[#22c55e] bg-[#064e3b] text-[#f8fafc] font-medium";
                    badgeStyle = "bg-[#22c55e] text-[#064e3b] border-[#22c55e] font-extrabold";
                  } else if (showDanger) {
                    optionStyle = "border-2 border-[#ef4444] bg-[#7f1d1d] text-[#f8fafc]";
                    badgeStyle = "bg-[#ef4444] text-white border-[#ef4444] font-extrabold";
                  } else if (isSubmitted) {
                    optionStyle = "border-2 border-transparent bg-[#334155]/40 text-slate-500 opacity-50";
                    badgeStyle = "bg-slate-900/30 text-slate-600 border-transparent";
                  }

                  return (
                    <button
                      key={idx}
                      id={`option-btn-${idx}`}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isSubmitted}
                      className={`w-full text-left rounded-xl p-3.5 transition-all duration-205 flex items-start space-x-3 text-sm leading-tight tap-highlight-transparent cursor-pointer ${optionStyle}`}
                    >
                      <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold leading-none ${badgeStyle}`}>
                        {getOptionLetter(idx)}
                      </span>
                      <span className="flex-1 pt-0.5">{option}</span>
                      
                      {/* Interactive Feedback Icons */}
                      {showSuccess && <Check className="text-[#22c55e] h-5 w-5 flex-shrink-0 ml-1.5 self-center" />}
                      {showDanger && <X className="text-[#ef4444] h-5 w-5 flex-shrink-0 ml-1.5 self-center" />}
                    </button>
                  );
                })}
              </div>

              {/* Submitted Feedback Banner */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 pt-4 border-t border-[#334155]"
                  >
                    <div className={`p-3.5 rounded-xl flex flex-col mb-4 ${
                      selectedOption === currentQuestion.correctIndex
                        ? "bg-[#064e3b]/40 text-[#f8fafc] border border-[#22c55e]/30"
                        : "bg-[#7f1d1d]/40 text-[#f8fafc] border border-[#ef4444]/30"
                    }`}>
                      <div className="flex items-center space-x-2 mb-1.5">
                        {selectedOption === currentQuestion.correctIndex ? (
                          <>
                            <span className="bg-[#22c55e] text-[#064e3b] p-1 rounded-full"><Check className="h-3 w-3" /></span>
                            <span className="font-bold text-xs tracking-wide uppercase text-emerald-200">Correct Answer</span>
                          </>
                        ) : (
                          <>
                            <span className="bg-[#ef4444] text-white p-1 rounded-full"><X className="h-3 w-3" /></span>
                            <span className="font-bold text-xs tracking-wide uppercase text-rose-200">Incorrect Answer</span>
                          </>
                        )}
                      </div>
                      
                      {selectedOption !== currentQuestion.correctIndex && (
                        <p className="text-xs font-semibold mb-2 text-slate-200">
                          Correct option was: <span className="text-[#22c55e] bg-[#064e3b]/80 px-2.5 py-0.5 rounded-md font-mono border border-[#22c55e]/30">{getOptionLetter(currentQuestion.correctIndex)}</span>
                        </p>
                      )}

                      <div className="text-xs text-slate-300 leading-relaxed pl-1.5 pr-1 py-1.5 bg-slate-900/40 rounded-lg border border-[#334155]">
                        <div className="font-semibold text-slate-200 mb-1 flex items-center">
                          <BookOpen className="h-3.5 w-3.5 mr-1 text-[#06b6d4]" />
                          <span>Solution Reference: {currentQuestion.reference}</span>
                        </div>
                        <p className="text-slate-300 italic">
                          "{currentQuestion.explanation}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="mt-4">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest shadow-md active:scale-98 transition-all hover:shadow-cyan-550/10 text-center flex items-center justify-center space-x-2 cursor-pointer ${
                      selectedOption === null
                        ? "bg-[#334155] text-slate-400 cursor-not-allowed shadow-none"
                        : "bg-[#06b6d4] text-[#0f172a] hover:bg-[#22d3ee] active:bg-[#06b6d4]"
                    }`}
                  >
                    <span>Submit Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full bg-[#06b6d4] text-[#0f172a] hover:bg-[#22d3ee] py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest shadow-md hover:shadow-cyan-500/10 active:scale-98 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>{currentIndex === 49 ? "Finish Practice Exam" : "Next Question"}</span>
                    <ChevronRight className="h-4 w-4 text-[#0f172a]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /*                       EXAM FINISHED SCREEN                     */
          /* ============================================================== */
          <div className="space-y-5 animate-fade-in pb-10">
            {/* Header Result summary card */}
            <div className={`p-6 rounded-2xl border text-center shadow-md relative overflow-hidden ${
              isPassed
                ? "bg-gradient-to-br from-[#064e3b]/80 to-[#1e293b] text-white border-[#22c55e]/40"
                : "bg-gradient-to-br from-[#7f1d1d]/80 to-[#1e293b] text-white border-[#ef4444]/40"
            }`}>
              {/* Confetti background hint */}
              <div className="absolute top-0 right-0 p-3 opacity-15">
                <Sparkles className="h-16 w-16 text-[#06b6d4]" />
              </div>

              <div className="flex justify-center mb-3">
                <div className={`p-3.5 rounded-full ${
                  isPassed ? "bg-[#22c55e] text-[#064e3b]" : "bg-[#ef4444] text-white"
                }`}>
                  {isPassed ? <Award className="h-10 w-10" /> : <AlertTriangle className="h-10 w-10" />}
                </div>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-1 text-slate-100">
                {isPassed ? "Congratulations! You Passed" : "Keep Practicing!"}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-semibold max-w-sm mx-auto mb-4">
                {isPassed 
                  ? "Outstanding attempt. You cleared the M9A certification score requirement of 70%!" 
                  : "You need 70% (35/50 correct) to pass the actual Singapore College of Insurance exam."}
              </p>

              {/* Status Badge */}
              <div className="inline-block mb-5">
                <span className={`px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xs ${
                  isPassed ? "bg-[#22c55e] text-[#064e3b] animate-pulse" : "bg-[#ef4444] text-white"
                }`}>
                  EXAM PASSED
                </span>
              </div>

              {/* Metric stats grid */}
              <div className="grid grid-cols-3 gap-2 border-t border-[#334155] pt-4 max-w-md mx-auto">
                <div className="bg-slate-900/60 p-2 rounded-xl border border-[#334155]/60">
                  <div className="text-2xl font-black text-white">{score}<span className="text-xs text-slate-400 font-normal">/50</span></div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Correct</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-[#334155]/60">
                  <div className="text-2xl font-black text-[#06b6d4]">{percentage}%</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pct Score</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-[#334155]/60">
                  <div className="text-2xl font-black text-white">{totalMarks}<span className="text-xs text-slate-400 font-normal">/100</span></div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Marks</div>
                </div>
              </div>
            </div>

            {/* Diagnostic Review Section */}
            <div className="bg-[#1e293b] rounded-2xl border border-[#334155] overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-[#334155]">
                <div className="flex items-center space-x-2">
                  <Layers className="h-4.5 w-4.5 text-[#06b6d4]" />
                  <h3 className="font-display font-bold text-sm tracking-wide uppercase">Diagnostic Answer Sheet</h3>
                </div>
                <span className="text-xs font-mono font-bold bg-[#334155] text-cyan-400 px-2.5 py-0.5 rounded-md border border-[#06b6d4]/20">
                  {incorrectAnswers.length} Problems Incorrect
                </span>
              </div>

              {/* Filters line */}
              <div className="flex bg-[#0f172a] border-b border-[#334155] text-xs px-2.5 py-2 space-x-1">
                {(["all", "incorrect", "correct"] as const).map((filter) => {
                  const count = filter === "all" ? 50 : filter === "incorrect" ? incorrectAnswers.length : 50 - incorrectAnswers.length;
                  const isActive = filterMode === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setFilterMode(filter)}
                      className={`px-3 py-1.5 rounded-md font-semibold capitalize transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#06b6d4] text-[#0f172a] shadow-xs"
                          : "text-slate-400 hover:bg-[#334155]/50 hover:text-white"
                      }`}
                    >
                      {filter} ({count})
                    </button>
                  );
                })}
              </div>

              {/* List Container */}
              <div className="divide-y divide-[#334155]/60 max-h-96 overflow-y-auto bg-[#1e293b]">
                {questions
                  .map((q, idx) => {
                    const ansRecord = answers.find((a) => a.id === q.id);
                    const isAnsCorrect = ansRecord?.isCorrect ?? false;
                    return { q, idx, ansRecord, isAnsCorrect };
                  })
                  .filter((item) => {
                    if (filterMode === "incorrect") return !item.isAnsCorrect;
                    if (filterMode === "correct") return item.isAnsCorrect;
                    return true;
                  })
                  .map(({ q, idx, ansRecord, isAnsCorrect }) => {
                    const isExpanded = expandedIncorrectId === q.id;
                    const letterChosen = ansRecord ? getOptionLetter(ansRecord.chosenIndex) : "-";
                    const letterCorrect = getOptionLetter(q.correctIndex);

                    return (
                      <div key={q.id} className="transition-all hover:bg-slate-800/40">
                        {/* Summary line */}
                        <div
                          onClick={() => toggleIncorrectExpand(q.id)}
                          className="flex items-center justify-between p-3.5 cursor-pointer select-none"
                        >
                          <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                              isAnsCorrect ? "bg-emerald-950 text-emerald-400 border border-emerald-500/30" : "bg-rose-950 text-rose-400 border border-rose-500/30"
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="font-mono text-xs text-slate-500 font-bold pr-1">{q.id}</span>
                            <p className="text-xs text-slate-300 font-medium truncate">
                              {q.question}
                            </p>
                          </div>

                          <div className="flex items-center space-x-2 flex-shrink-0">
                            {isAnsCorrect ? (
                              <span className="text-[10px] font-bold bg-[#064e3b]/80 text-[#22c55e] px-2 py-0.5 rounded-full flex items-center border border-[#22c55e]/20">
                                <Check className="h-3 w-3 mr-0.5" /> Correct
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold bg-[#7f1d1d]/80 text-[#ef4444] px-2 py-0.5 rounded-full flex items-center border border-[#ef4444]/20">
                                <X className="h-3 w-3 mr-0.5" /> Wrong ({letterChosen} vs {letterCorrect})
                              </span>
                            )}
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 text-slate-400" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-slate-400" />
                            )}
                          </div>
                        </div>

                        {/* Collapsible details pane */}
                        {isExpanded && (
                          <div className="p-4 bg-slate-900/40 border-t border-[#334155] space-y-3 text-xs text-slate-300">
                            <div className="font-bold text-slate-100">
                              Question {idx + 1}: {q.question}
                            </div>
                            
                            {/* Options with color coding */}
                            <div className="space-y-1.5">
                              {q.options.map((opt, oIdx) => {
                                const isCorrectOpt = oIdx === q.correctIndex;
                                const isChosenOpt = ansRecord && oIdx === ansRecord.chosenIndex;
                                
                                let optClass = "border-[#334155] bg-slate-900/60 text-slate-300";
                                if (isCorrectOpt) {
                                  optClass = "border-[#22c55e] bg-[#064e3b]/40 text-emerald-200 font-semibold";
                                } else if (isChosenOpt) {
                                  optClass = "border-[#ef4444] bg-[#7f1d1d]/40 text-rose-200";
                                }

                                return (
                                  <div key={oIdx} className={`p-2 rounded-lg border text-[11px] leading-tight flex items-start space-x-1.5 ${optClass}`}>
                                    <span className="font-bold font-mono text-slate-400">{getOptionLetter(oIdx)})</span>
                                    <span className="flex-1">{opt}</span>
                                    {isCorrectOpt && <Check className="h-3.5 w-3.5 text-emerald-500 ml-auto flex-shrink-0" />}
                                    {!isCorrectOpt && isChosenOpt && <X className="h-3.5 w-3.5 text-rose-500 ml-auto flex-shrink-0" />}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Reference and Solution */}
                            <div className="p-3 bg-slate-900/80 rounded-xl border border-[#334155] space-y-1">
                              <div className="font-semibold text-slate-200 flex items-center text-[11px]">
                                <BookOpen className="h-3.5 w-3.5 mr-1 text-[#06b6d4]" />
                                <span>Reference: {q.reference}</span>
                              </div>
                              <p className="text-slate-400 leading-normal text-[11px] italic">
                                "{q.explanation}"
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Informational footer on list */}
              <div className="p-3 text-[10px] text-slate-400 bg-[#0f172a] border-t border-[#334155] flex justify-between">
                <span>Pass target: 35/50 (70%)</span>
                <span>Tap any row to view solution workings</span>
              </div>
            </div>

            {/* Final control action bar */}
            <div className="pt-2">
              <button
                onClick={handleRestart}
                className="w-full bg-[#06b6d4] text-[#0f172a] hover:bg-[#22d3ee] py-4 px-6 rounded-2xl font-bold tracking-widest uppercase text-xs sm:text-sm shadow-md hover:shadow-cyan-500/10 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <RefreshCw className="h-4.5 w-4.5 text-[#0f172a]" />
                <span>RESTART EXAM (RESHUFFLE)</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-5 px-4 border-t border-[#334155] bg-[#0f172a]/60 text-center text-xs text-slate-400 font-medium">
        <div className="max-w-xl mx-auto space-y-1">
          <p>© 2026 • M9A Study Companion • Elegant Dark Theme Edition</p>
          <p className="text-[10px] text-slate-500">Singapore College of Insurance standards-aligned framework</p>
        </div>
      </footer>
    </div>
  );
}
