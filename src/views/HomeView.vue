<script setup>
import AnswerGrid from '../components/AnswerGrid.vue'

const sampleResult = [true, true, false, true, true]
</script>

<template>
  <main>
    <section class="hero">
      <div class="wrap">
        <div>
          <h1>Five questions.<br />Every day.</h1>
          <p class="lede">
            The same five for everyone, once a day. About ninety seconds. Then you're done until
            tomorrow.
          </p>
          <div class="cta-row">
            <a class="btn" href="#get-the-app" id="get-the-app">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Get it on Google Play
            </a>
            <p class="cta-note">Free. No ads.<br />No account needed to play.</p>
          </div>
        </div>

        <div
          class="phone"
          role="img"
          aria-label="Quintet Daily result screen: day 37, four out of five correct, better than 71 percent of players today, a three day streak."
        >
          <p class="eyebrow">QUINTET 37</p>
          <AnswerGrid :cells="sampleResult" />
          <div class="score-group">
            <p class="score">4/5</p>
            <p class="time">1m 12s</p>
          </div>
          <span class="pill">Better than 71% today</span>
          <hr />
          <div class="streak-row">
            <div class="count-group">
              <span class="count-number">3</span>
              <span class="count-label">day streak</span>
            </div>
            <span class="delta">+1 today</span>
          </div>
          <div class="week-strip">
            <span class="day"></span>
            <span class="day"></span>
            <span class="day"></span>
            <span class="day"></span>
            <span class="day played"></span>
            <span class="day played"></span>
            <span class="day played"></span>
          </div>
        </div>
      </div>
    </section>

    <section class="section tinted" id="how-it-works">
      <div class="wrap">
        <p class="kicker">How it works</p>
        <div class="how-grid">
          <div class="how-item">
            <p class="num">01</p>
            <h3>One set a day</h3>
            <p>
              Five questions, easy to hard. No timer, no lives, no endless scroll. When you're
              done, you're done.
            </p>
          </div>
          <div class="how-item">
            <p class="num">02</p>
            <h3>Everyone gets the same five</h3>
            <p>
              Which means your score actually means something next to anyone else's, and there's
              a day to talk about.
            </p>
          </div>
          <div class="how-item">
            <p class="num">03</p>
            <h3>Share the grid, not the answers</h3>
            <p>Five squares and a number. Nobody's day gets spoiled by a screenshot.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section share-section">
      <div class="wrap">
        <div>
          <h2>A result worth sending</h2>
          <p>
            Filled square, hollow square, and the day number. It reads the same in any chat app,
            and it gives nothing away.
          </p>
        </div>
        <div class="share-card">
          <p class="title">Quintet Daily 37 · 4/5</p>
          <AnswerGrid :cells="sampleResult" />
          <p class="time">1m 12s</p>
        </div>
      </div>
    </section>
  </main>
</template>
