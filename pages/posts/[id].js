import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({ post, globalData }) {
  return (
      <Layout>
          {post ? (
              <>
                  <SEO 
                      title={`${post.title} - ${globalData.name}`} 
                      description={post.description} 
                  />
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  {/* Adicione outros conteúdos do post conforme necessário */}
              </>
          ) : (
              <div className="text-center mt-10">
                  <h1 className="text-xl font-bold">Não há post</h1>
                  <p>Desculpe, mas o post que você está procurando não existe ou não foi encontrado.</p>
              </div>
          )}
      </Layout>
  );
}
export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);
 

  return {
    props: {
      globalData,
      posts,
    },
  };
};

