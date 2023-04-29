import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postdata = {
    slug,
    content,
    ...data,
  };

  return postdata;
}

function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

function getAllPosts() {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

function getMainAndFeaturedPosts() {
  const allPosts = getAllPosts();
  const mainPost = allPosts.find((post) => post.isMain);
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return { mainPost, featuredPosts };
}

function getRecentPosts() {
  return getAllPosts().slice(0, 5);
}

export {
  getPostData,
  getPostFiles,
  getAllPosts,
  getMainAndFeaturedPosts,
  getRecentPosts,
};
