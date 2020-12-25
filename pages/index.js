import Image from 'next/image'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>The lazy dog is here</h1>

        <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

        <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

        <h2>The lazy dog is here</h2>

        <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

        <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

        <h3>The lazy dog is here</h3>

        <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

        <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

        <h4>The lazy dog is here</h4>

        <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

        <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

        <h5>The lazy dog is here</h5>

        <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

        <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

        <p class="text_small">— Excerpt from A Voyage to Arcturus, by David Lindsay.</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image height="16" width="71" src="/images/vercel.svg" alt="Vercel Logo"/>
        </a>
      </footer>
    </div>
  )
}
