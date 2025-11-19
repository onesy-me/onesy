import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrolleyFilled = (props: IIcon) => {

  return (
    <Icon
      name='TrolleyFilled'

      short_name='Trolley'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-480H80v-80h160v480h600v80H160Zm80 200q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm40-320v-240h240v240H280Zm280 0v-240h240v240H560ZM760-80q-33 0-56.5-23.5T680-160q0-33 23.5-56.5T760-240q33 0 56.5 23.5T840-160q0 33-23.5 56.5T760-80Z"/>
    </Icon>
  );
};

IconMaterialTrolleyFilled.displayName = 'OnesyIconMaterialTrolleyFilled';

export default IconMaterialTrolleyFilled;
