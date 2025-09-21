// export default function Images(props) {
//   const imageData = {};
//   const onClick =

//   return (
//     <section className="thumbnails">
//       <div>
//         title={props.title} img src={props.url} alt={props.alt}
//         onClick={handleClick}
//       </div>
//     </section>
//   );
// }

export default function Image({ imgUrl, title, alt }) {
  return (
    <section className="thumbsnail">
      <img
        src={imgUrl}
        alt={alt}
        title={title}
        className="w-80 h-96 rounded-2xl"
      />
    </section>
  );
}
