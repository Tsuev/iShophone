import { useQuery   } from 'vue-query';

const { isLoading, data, error } = useQuery('todos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
});

export {
  isLoading, data, error
}
