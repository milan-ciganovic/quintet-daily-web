<script setup>
import LegalLayout from '../components/LegalLayout.vue'

const toc = [
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'how-we-use-it', label: 'How we use it' },
  { id: 'who-we-share-it-with', label: 'Who we share it with' },
  { id: 'how-long-we-keep-it', label: 'How long we keep it' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <main class="legal-page">
    <LegalLayout :toc="toc">
      <h1>Privacy Policy</h1>
      <p class="updated">
        Last updated <span class="placeholder">[DATE]</span> ·
        <span class="placeholder">[YOUR COMPANY NAME]</span>
      </p>

      <h2 id="what-we-collect">What we collect</h2>
      <p>
        If you create an account, your email address. If you sign in with Google, the email
        address and account identifier Google gives us — nothing else from your Google account.
      </p>
      <p>
        When you play, we store the date, your score, which answers you picked, and how long the
        set took.
      </p>
      <p>
        We record a small number of anonymous usage events: app opened, set started, set
        completed, set abandoned, result shared, notification opened.
        <span class="placeholder">[Confirm this list matches what you ship.]</span>
      </p>

      <h2 id="how-we-use-it">How we use it</h2>
      <p>
        To run the game — your streak, your statistics, and the "better than X% of players"
        figure, which is calculated across all results for that day and never identifies anyone.
        To send the daily reminder, if you allow notifications. To understand whether people come
        back, in aggregate.
      </p>
      <p>We do not sell your data and we do not run ads.</p>

      <h2 id="who-we-share-it-with">Who we share it with</h2>
      <p class="placeholder">
        [List every processor: Supabase for the database and accounts, Google for sign-in and
        push notifications, your analytics provider, your hosting. Name each one and link its
        privacy policy. Say where the data is stored — region matters for the EU.]
      </p>

      <h2 id="how-long-we-keep-it">How long we keep it</h2>
      <p class="placeholder">
        [State your retention period, and match it to your actual cleanup job. If you delete
        accounts that have been inactive for 90 days, say 90 days — a policy that does not match
        the code is worse than none.]
      </p>

      <h2 id="your-rights">Your rights</h2>
      <p>
        You can delete your account and everything attached to it from Settings inside the app,
        or by emailing us.
        <span class="placeholder"
          >[If you have EU users, add access, correction, portability and objection rights, and
          your lawful basis.]</span
        >
      </p>

      <h2 id="children">Children</h2>
      <p class="placeholder">
        [State your minimum age and keep it consistent with the Play Console age rating and
        target audience declaration. An inconsistency here is a common rejection.]
      </p>

      <h2 id="changes">Changes</h2>
      <p>We will post any change on this page and update the date at the top.</p>

      <h2 id="contact">Contact</h2>
      <p class="placeholder">
        [YOUR SUPPORT EMAIL] — this address must also be the one on your Play Console listing.
      </p>
    </LegalLayout>
  </main>
</template>
