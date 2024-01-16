function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://m.media-amazon.com/images/I/81DpGT7-McL._AC_SX679_.jpg"
          alt=""
        />
      </div>

      <div className="content">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum
          eveniet adipisci optio aliquid. Praesentium exercitationem nobis
          libero.
        </h2>
        <p className="info">
          <a href="" className="author">
            Cagatay Ergunes
          </a>
          <time>2024-01-08 23:12</time>
        </p>
        <p className="summary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere velit
          quas ex iusto id ea odit ad perferendis nostrum aliquid necessitatibus
          itaque, magni fugiat veritatis architecto voluptas a maiores!
          Possimus.
        </p>
      </div>
    </div>
  );
}

export default Post;
