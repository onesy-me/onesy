import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeling = (props: IIcon) => {

  return (
    <Icon
      name='Modeling'

      short_name='Modeling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-140 560-300l160-160 56 56-63 64h167v80H713l63 64-56 56ZM80-160v-280h400v280H80Zm80-80h240v-120H160v120Zm80-260-56-56 63-64H80v-80h167l-63-64 56-56 160 160-160 160Zm240-20v-280h400v280H480Zm80-80h240v-120H560v120ZM400-240v-120 120Zm160-360v-120 120Z"/>
    </Icon>
  );
};

IconMaterialModeling.displayName = 'OnesyIconMaterialModeling';

export default IconMaterialModeling;
