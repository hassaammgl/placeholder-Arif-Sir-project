import { FC } from "react";
import { IoIosArrowUp,  } from "react-icons/io";
import style from "../styles/faq.module.scss";
import Faqs, { FAQProps } from "react-faq-component";

interface CustomStyles {
  bgColor?: string;
  titleTextColor?: string;
  titleTextSize?: string;
  rowTitleColor?: string;
  rowTitleTextSize?: string;
  rowContentColor?: string;
  rowContentTextSize?: string;
  rowContentPaddingTop?: string;
  rowContentPaddingBottom?: string;
  rowContentPaddingLeft?: string;
  rowContentPaddingRight?: string;
  arrowColor?: string;
  transitionDuration?: string;
  timingFunc?: string;
}

const Faq: FC = () => {
  const styles: CustomStyles = {
    bgColor: "white",
    titleTextColor: "blue",
    // titleTextSize: '48px',
    rowTitleColor: "blue",
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: "16px",
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
    // rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
  };

  const config: FAQProps["config"] = {
    animate: true,
    openOnload: 1,
    expandIcon: <IoIosArrowUp />,
  };

  const data: FAQProps["data"] = {
    title: "",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
    ],
  };

  return (
    <section className={style.faq}>
      <h1>Faq</h1>
      <div className={style.content}>
        <Faqs data={data} styles={styles} config={config} />
      </div>
    </section>
  );
};

export default Faq;
