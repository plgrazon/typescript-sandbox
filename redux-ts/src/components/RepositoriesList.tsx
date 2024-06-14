import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();

  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};
