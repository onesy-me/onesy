import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudCase = (props: IIcon) => {

  return (
    <Icon
      name='EarbudCase'

      short_name='EarbudCase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h400q66 0 113 47t47 113v400q0 66-47 113t-113 47H280Zm-80-360v200q0 33 23.5 56.5T280-200h400q33 0 56.5-23.5T760-280v-200h-80v160H280v-160h-80Zm160 0v80h240v-80H360Zm-160-80h560v-120q0-33-23.5-56.5T680-760H280q-33 0-56.5 23.5T200-680v120Z"/>
    </Icon>
  );
};

IconMaterialEarbudCase.displayName = 'OnesyIconMaterialEarbudCase';

export default IconMaterialEarbudCase;
