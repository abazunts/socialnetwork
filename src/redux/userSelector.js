export let getUserSelector = state => state.usersPage.users;
export let getPageNumberSelector = state => state.usersPage.pageNumber;
export let getStatusSelector = state => state.usersPage.status;
export let getPageSizeSelector = state => state.usersPage.pageSize;
export let getTotalCountSelector = state => state.usersPage.totalCount;
export let getCurrentPageSelector = state => state.usersPage.currentPage;