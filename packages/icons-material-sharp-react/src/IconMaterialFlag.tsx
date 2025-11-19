import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlag = (props: IIcon) => {

  return (
    <Icon
      name='Flag'

      short_name='Flag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/>
    </Icon>
  );
};

IconMaterialFlag.displayName = 'OnesyIconMaterialFlag';

export default IconMaterialFlag;
