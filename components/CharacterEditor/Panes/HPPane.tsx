import { EditorPane } from './EditorPane';
import PaneCard from './PaneCard';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FindClassDetail } from '../../../datasets/computed/details';
import { CalculateHp, CalcultateLevelHitPoint } from '../hitDiceUtil';
import { CalculateStatModifier } from '../../StatUtil';
import { calculateResultStatValue } from '../../Character';
import { StatId } from '../../../datasets/Stats';

const TableFormatter = (levelTable: [string, number][]) => {
  const formattedTable = new Array();
  for (let i = 0; i < levelTable.length; i++) {
    formattedTable.push([
      FindClassDetail(parseInt(levelTable[i][0])).name,
      Array<number>(levelTable[i][1])
        .fill(0)
        .map((_, x) => x + 1),
      FindClassDetail(parseInt(levelTable[i][0])).hitDie,
    ]);
  }

  return formattedTable;
};

const HPPane: EditorPane = ({ character }) => {
  const levelTable = Object.entries(character.classes).filter(
    ([_, level]) => level > 0
  );

  const constitutionMod = CalculateStatModifier(
    calculateResultStatValue(character, StatId.Constitution)
  );

  const formattedLevelTable = TableFormatter(levelTable);
  console.log(formattedLevelTable);

  let total = 0;

  return (
    <PaneCard title='Zdraví'>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Povolání</Th>
              <Th>Level</Th>
              <Th>Level Base</Th>
              <Th>CON Modifier</Th>
              <Th>Level Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {formattedLevelTable.map((level) =>
              level[1].map((levelRow: number) => (
                <Tr key={level[0]}>
                  {levelRow === 1 ? (
                    <Td rowSpan={level[1].length}>{level[0]}</Td>
                  ) : (
                    <></>
                  )}
                  <Td>{levelRow}</Td>
                  <Td>{CalcultateLevelHitPoint(level[2], levelRow)}</Td>
                  <Td>{constitutionMod}</Td>
                  <Td>
                    {CalcultateLevelHitPoint(level[2], levelRow) +
                      constitutionMod}
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={4}></Td>
              <Td>{CalculateHp(formattedLevelTable, constitutionMod)}</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </PaneCard>
  );
};

export default HPPane;
