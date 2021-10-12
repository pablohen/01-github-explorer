interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acesso ao repo</a>
    </li>
  );
};

export default RepositoryItem;
