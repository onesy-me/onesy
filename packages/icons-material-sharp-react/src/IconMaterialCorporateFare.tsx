import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCorporateFare = (props: IIcon) => {

  return (
    <Icon
      name='CorporateFare'

      short_name='CorporateFare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z"/>
    </Icon>
  );
};

IconMaterialCorporateFare.displayName = 'OnesyIconMaterialCorporateFare';

export default IconMaterialCorporateFare;
