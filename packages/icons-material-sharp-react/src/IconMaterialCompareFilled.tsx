import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompareFilled = (props: IIcon) => {

  return (
    <Icon
      name='CompareFilled'

      short_name='Compare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-40v-80H120v-720h280v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h280v720H560Z"/>
    </Icon>
  );
};

IconMaterialCompareFilled.displayName = 'OnesyIconMaterialCompareFilled';

export default IconMaterialCompareFilled;
