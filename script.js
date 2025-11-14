document.addEventListener("DOMContentLoaded", () => {
    // --- TOPページのスタートボタン ---
    const startBtn = document.getElementById("startQuiz");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = "word01.html";
        }, 500);
      });
    }
  
    // --- クイズページ動作 ---
    const quizCards = document.querySelectorAll(".quiz-card");
    quizCards.forEach(card => {
      const choices = card.querySelectorAll(".choice");
      const explanation = card.querySelector(".explanation");
      const usage = card.querySelector(".usage");
      const nextArea = card.querySelector(".next-btn-area");
  
      if (!choices || choices.length === 0) return;
  
      // 最初は非表示を保証
      if (nextArea) nextArea.classList.remove("show");
  
      choices.forEach(choice => {
        choice.addEventListener("click", () => {
          // 連打防止
          choices.forEach(c => c.disabled = true);
  
          // 解説・使用例を表示
          if (explanation) explanation.classList.remove("hidden");
          if (usage) usage.classList.remove("hidden");
  
          // 「次／前」ボタンを解説後に出す
          if (nextArea) nextArea.classList.add("show");
  
          // 選択スタイル
          choice.classList.add("selected");
        });
      });
    });
  
    // --- TOPページのリストクリック遷移 ---
    const wordCards = document.querySelectorAll(".word-card");
    wordCards.forEach(card => {
      card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) {
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = link;
          }, 400);
        }
      });
    });
  });
  