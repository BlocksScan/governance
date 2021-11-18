import { fetchJson } from 'lib/fetchJson';
import useSWR from 'swr';
import { PollTally } from '../types';

type UsePollTallyResponse = {
  tally: PollTally | undefined;
};

export function usePollTally(pollId: number): UsePollTallyResponse {
  const { data: tallyData } = useSWR<PollTally>(`/api/polling/tally/${pollId}`, fetchJson, {
    revalidateOnFocus: false,
    refreshInterval: 0
  });

  return {
    tally: tallyData
  };
}