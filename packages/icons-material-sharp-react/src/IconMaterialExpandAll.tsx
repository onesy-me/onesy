import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandAll = (props: IIcon) => {

  return (
    <Icon
      name='ExpandAll'

      short_name='ExpandAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"/>
    </Icon>
  );
};

IconMaterialExpandAll.displayName = 'OnesyIconMaterialExpandAll';

export default IconMaterialExpandAll;
