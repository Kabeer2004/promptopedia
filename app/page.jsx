import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 classname = "head_text text-center">
            Discover and Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-6xl text-bold text-center"> AI-Powered Prompts </span>
        </h1>
        <p className="desc text-center">
            Promptopedia is an open-source AI prompting tool for the modern world to discover, create and share creative prompts.
        </p>
        <Feed />
    </section>
  )
}

export default Home