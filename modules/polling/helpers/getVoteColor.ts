import { POLL_VOTE_TYPE } from 'modules/polling/polling.constants';

export const getVoteColor = (optionId: number, voteType: string): string => {
  if (voteType === POLL_VOTE_TYPE.RANKED_VOTE || voteType === POLL_VOTE_TYPE.UNKNOWN) {
    return '#708390';
  }

  const colors = {
    0: '#708390',
    1: '#2794e9',
    2: '#F77249'
  };

  return colors[optionId];
};
