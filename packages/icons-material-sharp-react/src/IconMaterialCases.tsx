import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCases = (props: IIcon) => {

  return (
    <Icon
      name='Cases'

      short_name='Cases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80v-520h80v440h680v80H40Zm160-160v-520h200v-160h320v160h200v520H200Zm280-520h160v-80H480v80ZM280-320h560v-360H280v360Zm0-360v360-360Z"/>
    </Icon>
  );
};

IconMaterialCases.displayName = 'OnesyIconMaterialCases';

export default IconMaterialCases;
