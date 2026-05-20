const typeData = {
  overwork: {
    name: "頑張りすぎ蓄積タイプ",
    summary:
      "あなたは、疲れていても先に家事や予定を片付けようとしやすいタイプです。自分ではまだ大丈夫と思っていても、体の余白が少ないまま動き続けて、夕方や夜に感情があふれやすくなることがあります。",
    bodySigns: ["朝から体が重い", "肩や首がこわばる", "夕方にどっと疲れる", "呼吸が浅くなる", "寝ても疲れが残りやすい"],
    emotion: ["急にイライラする", "頼まれごとが重く感じる", "なんで私ばかりと思いやすい"],
    familyScene: "夕方や夜、家事や用事が残っているときに、家族から追加で頼まれた場面。",
    effortGap: "もっと頑張る、もっと我慢する、全部終わらせてから休もうとする。",
    selfCare: "今日の予定や家事を1つ減らす。休むことを、サボりではなく余白を戻すための行動として扱う。",
    familyLine: "今日は少し体の余白が少ないから、家事を1つ減らしてゆっくり動きたい。",
    message:
      "あなたに必要なのは、さらに頑張ることではなく、余白がなくなる前に一つ減らすことかもしれません。"
  },
  bottled: {
    name: "感情ため込み爆発タイプ",
    summary:
      "あなたは、その場では我慢できるけれど、小さな不満や違和感が積み重なったときに、一気に感情が出やすいタイプです。本当は早めに伝えたいことがあっても、空気を読んで飲み込んでしまうことがあります。",
    bodySigns: ["胸がざわざわする", "ため息が増える", "胃が重くなる", "体に力が入りやすい", "涙が出やすい"],
    emotion: ["我慢していた気持ちが急に出る", "分かってほしかったのに、という思いが強くなる", "あとから言いすぎたと感じる"],
    familyScene: "何度も小さな我慢を重ねたあとに、家族から何気ない一言を言われた場面。",
    effortGap: "何も言わずに我慢する、察してもらおうとする、限界まで飲み込む。",
    selfCare: "小さな違和感のうちに、短い言葉で伝える。大きくあふれる前に、1割だけ外に出す練習をする。",
    familyLine:
      "今すぐ怒っているわけじゃないけど、少し負担がたまっているから、あとで一緒に整理したい。",
    message:
      "感情が出ること自体が悪いわけではありません。小さいうちに出す練習が、あなたを守る助けになります。"
  },
  sensitive: {
    name: "音・予定変更に敏感タイプ",
    summary:
      "あなたは、音・会話量・人の動き・急な予定変更など、刺激が多い環境で疲れやすいタイプです。まわりからは急に不機嫌になったように見えても、実際には刺激が積み重なって余白が減っている可能性があります。",
    bodySigns: ["音がいつもより大きく感じる", "頭がぼんやりする", "肩や首がこわばる", "呼吸が浅くなる", "ひとりになりたくなる"],
    emotion: ["急な変更で気持ちが乱れやすい", "会話量が多いと疲れる", "静かにしたい気持ちが強くなる"],
    familyScene: "家の中の音や会話が多いとき、または急な予定変更が続いたとき。",
    effortGap: "刺激が多いまま我慢する、急な変更にも無理に合わせる、しんどいと言わずに耐える。",
    selfCare: "静かな時間を先に確保する。予定変更がある日は、前後に余白時間を作る。",
    familyLine:
      "急な変更が続くと疲れやすいから、分かっている予定は先に教えてもらえると助かる。",
    message:
      "敏感さはわがままではありません。刺激を減らす工夫は、自分と家族のための準備になります。"
  },
  selfBlame: {
    name: "自己否定ループタイプ",
    summary:
      "あなたは、不調や感情の揺れそのものよりも、あとから自分を責め続けることで消耗しやすいタイプです。家族に強く言ってしまったあと、反省を超えて、自分の性格や存在そのものを責めてしまうことがあります。",
    bodySigns: ["胸が重い", "眠りが浅い", "頭の中で同じことを繰り返し考える", "体が固まりやすい", "疲れているのに休めない"],
    emotion: ["申し訳なさが強くなる", "私はダメだと思いやすい", "反省が長引きやすい"],
    familyScene: "家族に強く言ったあと、ひとりになったタイミングで自己否定が強くなる場面。",
    effortGap: "自分を責め続ける、反省を自己否定に変える、次の行動を考える前に落ち込み続ける。",
    selfCare:
      "自分を責める前に、起きたことを体の状態・感情・行動に分けて書く。反省は、次の行動を1つ決めるために使う。",
    familyLine:
      "さっきは言い方が強かったね。ごめんね。次は早めに少し休むようにするね。",
    message:
      "反省は、自分を責め続けるためではなく、次の小さな選択を見つけるために使って大丈夫です。"
  },
  familyFirst: {
    name: "家族優先しすぎタイプ",
    summary:
      "あなたは、自分の体調や休息よりも、家族の予定・機嫌・空気を優先しやすいタイプです。周りに合わせる力がある一方で、自分の限界に気づくのが遅くなりやすいです。",
    bodySigns: ["疲れを感じても動き続ける", "体が重いのに休めない", "家族の機嫌が気になる", "ひとり時間が足りない", "自分の予定が後回しになる"],
    emotion: ["なんで私ばかりと思いやすい", "本当は休みたいのに言えない", "家族の反応に左右されやすい"],
    familyScene: "自分の休息を後回しにし続けたあと、家族からさらに頼まれごとをされた場面。",
    effortGap: "家族を優先し続ける、頼まれる前に動く、自分の希望を言わない。",
    selfCare:
      "家族の予定の前に、自分の休む時間を先に入れる。今日の自分のための時間を10分だけ確保する。",
    familyLine:
      "今日は少し自分の休む時間を先に取りたいから、10分だけひとりで過ごすね。",
    message:
      "家族を大切にするためにも、自分の余白を先に確保する時間があって大丈夫です。"
  }
};

const questions = [
  { text: "休む前に、まず家事や用事を片付けようとしてしまう", type: "overwork" },
  { text: "疲れていても、予定を減らすことに罪悪感がある", type: "overwork" },
  { text: "気づくと一日中動き続けていることが多い", type: "overwork" },
  { text: "限界が来るまで、自分の疲れに気づきにくい", type: "overwork" },
  { text: "その場では我慢するけれど、あとで一気に感情が出ることがある", type: "bottled" },
  { text: "本当は嫌だったことを、言えずに飲み込むことが多い", type: "bottled" },
  { text: "小さな不満が積み重なって、突然強い言い方になってしまう", type: "bottled" },
  { text: "家族に分かってほしいのに、うまく伝えられない", type: "bottled" },
  { text: "家族の声や物音が、いつもよりつらく感じる日がある", type: "sensitive" },
  { text: "急な予定変更があると、気持ちが一気に乱れやすい", type: "sensitive" },
  { text: "人の動きや会話量が多いと、どっと疲れる", type: "sensitive" },
  { text: "静かな時間がないと、感情の余白がなくなりやすい", type: "sensitive" },
  { text: "家族に強く言ったあと、自分を責め続けてしまう", type: "selfBlame" },
  { text: "不調や感情の揺れを、自分の性格のせいだと思いやすい", type: "selfBlame" },
  { text: "反省ではなく、自己嫌悪になってしまうことが多い", type: "selfBlame" },
  { text: "小さな失敗でも、私はダメだと感じやすい", type: "selfBlame" },
  { text: "自分の体調より、家族の予定を優先してしまう", type: "familyFirst" },
  { text: "本当は休みたいのに、家族に合わせて動いてしまう", type: "familyFirst" },
  { text: "家族の機嫌や空気を読みすぎて疲れる", type: "familyFirst" },
  { text: "自分のために時間を取ることに罪悪感がある", type: "familyFirst" }
];

const choices = [
  { label: "よくある", value: 3 },
  { label: "ときどきある", value: 2 },
  { label: "あまりない", value: 1 },
  { label: "ほとんどない", value: 0 }
];

const state = {
  currentIndex: 0,
  answers: Array(questions.length).fill(null),
  lastResultText: ""
};

const elements = {
  startButtons: document.querySelectorAll("[data-start]"),
  quiz: document.getElementById("quiz"),
  result: document.getElementById("result"),
  quizForm: document.getElementById("quizForm"),
  currentQuestion: document.getElementById("currentQuestion"),
  totalQuestions: document.getElementById("totalQuestions"),
  progressBar: document.getElementById("progressBar"),
  questionText: document.getElementById("questionText"),
  choices: document.getElementById("choices"),
  answerMessage: document.getElementById("answerMessage"),
  prevButton: document.getElementById("prevButton"),
  nextButton: document.getElementById("nextButton"),
  resultSummary: document.getElementById("resultSummary"),
  resultDetail: document.getElementById("resultDetail"),
  scoreBoard: document.getElementById("scoreBoard"),
  copyButton: document.getElementById("copyButton"),
  restartButton: document.getElementById("restartButton"),
  copyMessage: document.getElementById("copyMessage")
};

elements.totalQuestions.textContent = questions.length;

function renderQuestion() {
  const question = questions[state.currentIndex];
  const selected = state.answers[state.currentIndex];

  elements.currentQuestion.textContent = state.currentIndex + 1;
  elements.progressBar.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  elements.questionText.textContent = question.text;
  elements.answerMessage.textContent = "";
  elements.prevButton.disabled = state.currentIndex === 0;
  elements.nextButton.textContent = state.currentIndex === questions.length - 1 ? "結果を見る" : "次へ";

  elements.choices.innerHTML = choices
    .map((choice) => {
      const id = `q${state.currentIndex}-${choice.value}`;
      const checked = selected === choice.value ? "checked" : "";
      return `
        <label class="choice" for="${id}">
          <input id="${id}" type="radio" name="answer" value="${choice.value}" ${checked} />
          <span class="choice__label">${choice.label}</span>
          <span class="choice__point">${choice.value}点</span>
        </label>
      `;
    })
    .join("");

  const checkedInput = elements.choices.querySelector("input:checked");
  if (checkedInput) {
    checkedInput.focus({ preventScroll: true });
  }
}

function saveAnswer() {
  const checked = elements.quizForm.querySelector("input[name='answer']:checked");
  if (!checked) {
    elements.answerMessage.textContent = "今の状態に近いものをひとつ選んでくださいね。";
    return false;
  }

  state.answers[state.currentIndex] = Number(checked.value);
  return true;
}

function calculateScores() {
  return questions.reduce(
    (scores, question, index) => {
      scores[question.type] += state.answers[index] ?? 0;
      return scores;
    },
    Object.keys(typeData).reduce((scores, type) => {
      scores[type] = 0;
      return scores;
    }, {})
  );
}

function getRankedTypes(scores) {
  return Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
}

function formatList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderResultBlock(title, content) {
  return `
    <div class="result-block">
      <h3>${title}</h3>
      ${Array.isArray(content) ? formatList(content) : `<p>${content}</p>`}
    </div>
  `;
}

function renderScores(scores) {
  elements.scoreBoard.innerHTML = `
    <h3>各タイプのスコア</h3>
    ${Object.entries(scores)
      .map(([type, score]) => {
        const percent = (score / 12) * 100;
        return `
          <div class="score-row">
            <span class="score-name">${typeData[type].name}</span>
            <span class="score-value">${score}/12</span>
            <span class="score-track" aria-hidden="true"><span style="width: ${percent}%"></span></span>
          </div>
        `;
      })
      .join("")}
  `;
}

function buildResultText(mainTypes, subType, scores, isTie) {
  const typeNames = mainTypes.map((type) => typeData[type].name).join("、");
  const lines = [
    "自律神経タイプ別セルフケア診断シート",
    `あなたに近いタイプ: ${typeNames}`
  ];

  if (isTie) {
    lines.push("複数の傾向が同じくらい出ているかもしれません。");
  } else if (subType) {
    lines.push(`サブタイプ: ${typeData[subType].name}`);
  }

  mainTypes.forEach((type) => {
    const data = typeData[type];
    lines.push(
      "",
      `【${data.name}】`,
      `特徴: ${data.summary}`,
      `起きやすい体のサイン: ${data.bodySigns.join("、")}`,
      `感情の出方: ${data.emotion.join("、")}`,
      `家族に伝える一言: ${data.familyLine}`,
      `ひとこと: ${data.message}`
    );
  });

  lines.push(
    "",
    "各タイプのスコア",
    ...Object.entries(scores).map(([type, score]) => `${typeData[type].name}: ${score}/12`),
    "",
    "この診断は医療的な診断ではありません。強い不調が続く場合や日常生活に支障がある場合は、医療機関や専門家への相談も選択肢に入れてください。"
  );

  return lines.join("\n");
}

function showResult() {
  const scores = calculateScores();
  const rankedTypes = getRankedTypes(scores);
  const topScore = scores[rankedTypes[0]];
  const mainTypes = rankedTypes.filter((type) => scores[type] === topScore);
  const isTie = mainTypes.length > 1;
  const subType = isTie ? null : rankedTypes[1];
  const mainNames = mainTypes.map((type) => typeData[type].name);

  elements.result.classList.remove("section--hidden");

  elements.resultSummary.innerHTML = `
    <span class="type-badge">${mainNames.join(" / ")}</span>
    ${
      isTie
        ? "<p class=\"subtype\">複数の傾向が同じくらい出ているかもしれません。今日は一番心当たりのあるところから見てみてください。</p>"
        : `<p class="subtype">サブタイプ: ${typeData[subType].name}</p>`
    }
  `;

  elements.resultDetail.innerHTML = `
    <div class="result-grid">
      ${mainTypes
        .map((type) => {
          const data = typeData[type];
          return `
            <div class="result-block">
              <h3 class="type-section-title">${data.name}</h3>
            </div>
            ${renderResultBlock("特徴", data.summary)}
            ${renderResultBlock("起きやすい体のサイン", data.bodySigns)}
            ${renderResultBlock("感情の出方", data.emotion)}
            ${renderResultBlock("家族にぶつけやすい場面", data.familyScene)}
            ${renderResultBlock("やりがちな努力のズレ", data.effortGap)}
            ${renderResultBlock("今日からできるセルフケア", data.selfCare)}
            ${renderResultBlock("家族に伝える一言テンプレート", data.familyLine)}
            ${renderResultBlock("ひとことメッセージ", data.message)}
          `;
        })
        .join("")}
    </div>
  `;

  renderScores(scores);
  state.lastResultText = buildResultText(mainTypes, subType, scores, isTie);
  elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
  elements.result.focus({ preventScroll: true });
}

function restartQuiz() {
  state.currentIndex = 0;
  state.answers = Array(questions.length).fill(null);
  state.lastResultText = "";
  elements.result.classList.add("section--hidden");
  elements.copyMessage.textContent = "";
  renderQuestion();
  elements.quiz.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyResult() {
  elements.copyMessage.textContent = "";

  try {
    await navigator.clipboard.writeText(state.lastResultText);
    elements.copyMessage.textContent = "診断結果をコピーしました。必要なところだけ家族に見せても大丈夫です。";
  } catch (error) {
    elements.copyMessage.textContent = "コピーできませんでした。結果部分を選択してコピーしてください。";
  }
}

elements.startButtons.forEach((button) => {
  button.addEventListener("click", () => {
    elements.quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

elements.prevButton.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

elements.nextButton.addEventListener("click", () => {
  if (!saveAnswer()) return;

  if (state.currentIndex === questions.length - 1) {
    showResult();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
});

elements.choices.addEventListener("change", () => {
  saveAnswer();
});

elements.restartButton.addEventListener("click", restartQuiz);
elements.copyButton.addEventListener("click", copyResult);

renderQuestion();
