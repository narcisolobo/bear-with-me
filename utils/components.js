import Image from 'next/image';
import styles from '@/styles/post-content.module.css';
import { PrismLight } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

PrismLight.registerLanguage('js', js);

const components = {
  p: (paragraph) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '768';
      const height = metaHeight ? metaHeight[1] : '432';
      const isPriority = metastring?.toLowerCase().match('{priority}');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className="post-img-wrapper">
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="rounded-top"
            alt={alt}
            priority={isPriority}
          />
          {hasCaption ? (
            <div
              className={`rounded-bottom ${styles.caption}`}
              aria-label={caption}>
              {caption}
            </div>
          ) : null}
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
  h1: ({ node, ...props }) => (
    <h1 {...props} className="mb-4">
      {props.children}
    </h1>
  ),
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <PrismLight
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={oneDark}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
};

export default components;
