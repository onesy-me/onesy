import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandAllFilled = (props: IIcon) => {

  return (
    <Icon
      name='ExpandAllFilled'

      short_name='ExpandAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"/>
    </Icon>
  );
};

IconMaterialExpandAllFilled.displayName = 'OnesyIconMaterialExpandAllFilled';

export default IconMaterialExpandAllFilled;
