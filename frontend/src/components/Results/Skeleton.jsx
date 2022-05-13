import ContentLoader from "react-content-loader"

export default function Skeleton(props) {

  return (

    <article
      className="article-result"
      key={0}
    >
      <header>
        <ContentLoader
          speed={1}
          width={400}
          height={30}
          viewBox="0 0 400 20"
          backgroundColor="#1095c1"
          backgroundOpacity={0.5}
          foregroundColor="#ffffff"
          foregroundOpacity={0.6}
        >
          <rect
            x="8"
            y="0"
            rx="6"
            ry="6"
            width="250"
            height="15"
          />
        </ContentLoader>
      </header>
      <ContentLoader 
        speed={1}
        width="100%"
        height="100%"
        viewBox="0 0 800 30"
        backgroundColor="#1095c1"
        backgroundOpacity={0.5}
        foregroundColor="#ffffff"
        foregroundOpacity={0.6}
      >
        <rect
          x="8"
          y="0"
          rx="5"
          ry="5"
          width="25%"
          height="12"
        />
        <rect
          x="8"
          y="18"
          rx="5"
          ry="5"
          width="40%"
          height="12"
        /> 
      </ContentLoader>
      <footer>
        <ContentLoader 
          speed={1}
          width="100%"
          height="100%"
          viewBox="0 0 800 70"
          backgroundColor="#1095c1"
          backgroundOpacity={0.5}
          foregroundColor="#ffffff"
          foregroundOpacity={0.6}
        >
          <rect
            x="8"
            y="0"
            rx="5"
            ry="5"
            width="76%"
            height="12"
          /> 
          <rect
            x="8"
            y="28"
            rx="5"
            ry="5"
            width="65%"
            height="12"
          /> 
          <rect
            x="8"
            y="46"
            rx="5"
            ry="5"
            width="30%"
            height="12"
          />
        </ContentLoader>
      </footer>
    </article>

  )

}