import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactCheck = (props: IIcon) => {

  return (
    <Icon
      name='FactCheck'

      short_name='FactCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80ZM80-120v-720h800v720H80Zm80-80h640v-560H160v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialFactCheck.displayName = 'OnesyIconMaterialFactCheck';

export default IconMaterialFactCheck;
