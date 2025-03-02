import { FormContainer, MinutesAmountInput, TaskInput } from './styles';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../contexts/CycleContext';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor=""> Vou trabalhar em </label>
      <TaskInput
        placeholder="Digite um nome para o projeto"
        type="text"
        id="task"
        list="task-sugestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="">durante </label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
