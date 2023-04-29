import Image from 'next/image';
import styles from '@/styles/hero.module.css';

function Hero() {
  return (
    <section
      className={`rounded-top d-flex justify-content-center align-items-center p-3 ${styles.hero}`}>
      <div className="text-center">
        <Image
          alt="Fozzie Bear"
          src={`/images/fozzie-hero.webp`}
          width={300}
          height={300}
          priority
          className="img-fluid rounded-circle bg-light p-3"
        />
        <h1 className="mt-3">{`Wocka, Wocka, Wocka!`.toLocaleUpperCase()}</h1>
        <h2>It's Fozzie's Blog!</h2>
      </div>
    </section>
  );
}

export default Hero;
