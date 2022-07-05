import { Skills } from '../datasets/skills';

const TestPage = () => {
  return (
    <div>
      <h1>Test</h1>
      {Object.values(Skills).map((skill) => (
        <div key={skill.index}>
          <h2>{skill.name}</h2>
          <ul>
            {skill.abilities.map((ability) => (
              <li key={ability.index}>{ability.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TestPage;
