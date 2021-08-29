import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RepoDataTable from '../components/RepoDataTable/RepoDataTable'

import { MockedProvider } from '@apollo/client/testing';
import GET_GIT_INFO from "../pages/api/query"


// node:
// createdAt: "2020-08-09T12:41:12Z"
// defaultBranchRef: {__typename: "Ref", name: "master"}
// descriptionHTML: "<div></div>"
// id: "MDEwOlJlcG9zaXRvcnkyODYyMzQ4MDQ="
// name: "React_Foodarna"
// owner: {__typename: "User", login: "SUN262335", url: "https://github.com/SUN262335"}
// primaryLanguage: {__typename: "Language", name: "JavaScript"}
// stargazers: {__typename: "StargazerConnection", totalCount: 1}
// updatedAt: "2021-08-27T00:22:45Z"
// url: "https://github.com/SUN262335/React_Foodarna"
// viewerHasStarred: true
// viewerSubscription: "SUBSCRIBED"
// watchers: {__typename: "UserConnection", totalCount: 1}


const dummyRepoData = [{node: {
        id                  :   "test-1",
        name                :   "React test1",
        owner               :   {login: "k1"},
        createdAt           :   "2020-08-09T12:41:12Z",
        updatedAt           :   "2021-08-27T00:22:45Z",
        viewerHasStarred    :   true,
        stargazers          :   {totalCount: 1},
        primaryLanguage     :   {name: "JavaScript"},
        url                 :   "React test1 URL",
    }}, {node: {
        id                  :   "test-2",
        name                :   "React test2",
        owner               :   {login: "k1"},
        createdAt           :   "2020-07-09T12:41:12Z",
        updatedAt           :   "2021-08-24T00:22:45Z",
        viewerHasStarred    :   false,
        stargazers          :   {totalCount: 3},
        primaryLanguage     :   {name: "JavaScript1"},
        url                 :   "React test2 URL",
    }}, {node: {
        id                  :   "test-3",
        name                :   "React test3",
        owner               :   {login: "k2"},
        createdAt           :   "2020-04-09T12:41:12Z",
        updatedAt           :   "2021-05-27T00:22:45Z",
        viewerHasStarred    :   true,
        stargazers          :   {totalCount: 4},
        primaryLanguage     :   {name: "JavaScript2"},
        url                 :   "React test1 URL",
    }}
]
;

const mocks = [
    {
      request: {
        query: GET_GIT_INFO,
      }
    },
  ];

const renderComponent = (props = {}) => {
    return {
      ...render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <RepoDataTable repoDatas={dummyRepoData} />
        </MockedProvider>
      ),
    };
  };

  
test('shows the correct name', () => {
    renderComponent();
    expect(screen.getByText(dummyRepoData[0].node.name)).toBeInTheDocument();
});

test('shows the correct primary language', () => {
    renderComponent();
    expect(screen.getByText(dummyRepoData[0].node.primaryLanguage.name)).toBeInTheDocument();
});

test('shows the correct stars', () => {
    renderComponent();
    expect(screen.getByText(dummyRepoData[0].node.stargazers.totalCount.toString())).toBeInTheDocument();
});
