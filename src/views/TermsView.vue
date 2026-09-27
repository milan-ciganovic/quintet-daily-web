<script setup>
import LegalLayout from '../components/LegalLayout.vue'

const toc = [
  { id: 'the-service', label: 'The service' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'your-results', label: 'Your results' },
  { id: 'availability', label: 'Availability' },
  { id: 'termination', label: 'Termination' },
  { id: 'disclaimer', label: 'Disclaimer' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <main class="legal-page">
    <LegalLayout :toc="toc">
      <h1>Terms of Service</h1>
      <p class="updated">
        Last updated <span class="placeholder">[DATE]</span> ·
        <span class="placeholder">[YOUR COMPANY NAME]</span>
      </p>
      <p class="placeholder">
        [This page is a starting structure, not legal advice. Have a lawyer review it before you
        rely on it — especially the liability, governing law and termination sections.]
      </p>

      <h2 id="the-service">The service</h2>
      <p>
        Quintet Daily is a daily trivia app: five questions, once a day, the same five for
        everyone. These terms apply whenever you use the app, signed in or not.
      </p>

      <h2 id="accounts">Accounts</h2>
      <p>
        You can play without an account. If you create one — with an email and password, or with
        Google — you're responsible for keeping your credentials to yourself and for anything
        that happens under your account.
      </p>
      <p class="placeholder">
        [State your minimum age to create an account, matching the Children section of the
        Privacy Policy.]
      </p>

      <h2 id="acceptable-use">Acceptable use</h2>
      <p>
        Play fairly. Don't automate, scrape, or otherwise try to answer the day's set without
        playing it yourself, and don't use the app in a way that disrupts it for other players.
      </p>

      <h2 id="your-results">Your results</h2>
      <p>
        Your streak, scores and statistics are yours to view and share. The "share the grid"
        image you can post from the app contains a score and a day number — nothing that spoils
        the day's questions for anyone else.
      </p>

      <h2 id="availability">Availability</h2>
      <p>
        We aim to publish a new set every day, but we don't guarantee the app will always be
        available or error-free.
      </p>

      <h2 id="termination">Termination</h2>
      <p class="placeholder">
        [State the conditions under which an account can be suspended or removed, and how a
        player can delete their own account — this should match what Settings actually does in
        the app.]
      </p>

      <h2 id="disclaimer">Disclaimer</h2>
      <p class="placeholder">
        [Standard "as is, without warranties of any kind" language — have a lawyer draft or
        review this for your jurisdiction.]
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p class="placeholder">
        [Standard liability cap language — again, have a lawyer review this rather than relying
        on a template.]
      </p>

      <h2 id="governing-law">Governing law</h2>
      <p class="placeholder">[Name the jurisdiction whose law governs these terms.]</p>

      <h2 id="changes">Changes</h2>
      <p>We will post any change on this page and update the date at the top.</p>

      <h2 id="contact">Contact</h2>
      <p class="placeholder">
        [YOUR SUPPORT EMAIL] — this address must also be the one on your Play Console listing.
      </p>
    </LegalLayout>
  </main>
</template>
