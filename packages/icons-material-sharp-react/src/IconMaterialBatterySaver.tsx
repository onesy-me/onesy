import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatterySaver = (props: IIcon) => {

  return (
    <Icon
      name='BatterySaver'

      short_name='BatterySaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm-280-80Zm-80 80v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H280Z"/>
    </Icon>
  );
};

IconMaterialBatterySaver.displayName = 'OnesyIconMaterialBatterySaver';

export default IconMaterialBatterySaver;
