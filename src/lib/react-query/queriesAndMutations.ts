import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createUserAcc } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAcc(user),
  });
};

//* 1:37
