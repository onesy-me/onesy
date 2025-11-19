import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskFilled = (props: IIcon) => {

  return (
    <Icon
      name='DeskFilled'

      short_name='Desk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-360q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v360q0 17-11.5 28.5T840-240q-17 0-28.5-11.5T800-280v-40H640v40q0 17-11.5 28.5T600-240q-17 0-28.5-11.5T560-280v-360H160v360q0 17-11.5 28.5T120-240q-17 0-28.5-11.5T80-280Zm560-280h160v-80H640v80Zm0 160h160v-80H640v80Z"/>
    </Icon>
  );
};

IconMaterialDeskFilled.displayName = 'OnesyIconMaterialDeskFilled';

export default IconMaterialDeskFilled;
