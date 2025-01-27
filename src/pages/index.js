import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import {
  Hits,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom';
import styled from 'styled-components';
import gitHubCorner from '../../static/github-corner-right.svg';
import algoliaLogo from '../../static/search-by-algolia-light-background.svg';
import { Layout } from '../components/layout';
import { H3 } from '../components/page-elements';
import { SEO } from '../components/seo';
import { SheetPreview } from '../components/sheet-preview';
import { SocialButtons } from '../components/social-buttons';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY
);

const StyledHits = styled(Hits)`
  li {
    list-style: none;
  }
  margin: 0;
  padding: 0;
`;

const Box = styled(SearchBox)`
  position: relative;
  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid 1px lightgray;
    font-size: 30px;
    font-family: ${props => props.theme.h1};
  }
  button {
    display: none;
  }
`;

const AlgoliaLogo = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  background-image: url(${algoliaLogo});
  background-repeat: no-repeat;
  background-position: right;
`;

const GitHubCorner = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  height: 80px;
  width: 80px;
  background-image: url(${gitHubCorner});
  /* background-repeat: no-repeat; */
  /* background-position: right; */
`;

export default () => {
  const { description, image, title, gitHubUrl } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={title}
        description={description || 'nothin’'}
        image={image}
        keywords={[
          `cheat sheets`,
          `bash`,
          `fish`,
          `zsh`,
          `git`,
          `javascript`,
          `linux`,
          `macOS`,
          `graphql`,
          `vscode`,
          `wsl`,
          `yarn`,
          `npm`,
        ]}
      />
      <GitHubCorner
        role="link"
        aria-label="github repo link"
        href={gitHubUrl}
        target="_blank"
        rel="noopener"
      />
      <SocialButtons />
      <H3>{description}</H3>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      >
        <Box />
        <AlgoliaLogo />
        <StyledHits hitComponent={SheetPreview} />
      </InstantSearch>
    </Layout>
  );
};
