import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div>
      <svg viewBox="0 0 1320 300" className={styles.svg}>
        <text
          x="50%"
          y="50%"
          dy=".35em"
          text-anchor="middle"
          className={styles.text}
        >
          socmanager
        </text>
      </svg>
    </div>
  );
};

export default Loading;
