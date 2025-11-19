import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevatorFilled = (props: IIcon) => {

  return (
    <Icon
      name='ElevatorFilled'

      short_name='Elevator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h120v-160h40v-180H240v180h40v160Zm60-380q21 0 35.5-14.5T390-670q0-21-14.5-35.5T340-720q-21 0-35.5 14.5T290-670q0 21 14.5 35.5T340-620Zm180 100h200L620-680 520-520Zm100 240 100-160H520l100 160ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialElevatorFilled.displayName = 'OnesyIconMaterialElevatorFilled';

export default IconMaterialElevatorFilled;
