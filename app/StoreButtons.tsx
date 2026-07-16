import { APP_STORE, PLAY_STORE, APPSTORE_IMG, PLAYSTORE_IMG } from "./constants";

export default function StoreButtons({ height = 52 }: { height?: number }) {
  return (
    <>
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
        <img src={APPSTORE_IMG} alt="Télécharger sur l'App Store" style={{ height }} />
      </a>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
        <img src={PLAYSTORE_IMG} alt="Disponible sur Google Play" style={{ height }} />
      </a>
    </>
  );
}
