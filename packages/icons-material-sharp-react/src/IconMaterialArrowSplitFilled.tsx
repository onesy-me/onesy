import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowSplitFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArrowSplitFilled'

      short_name='ArrowSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440v-80h304l200-200H560v-80h240v240h-80v-104L496-440H160Zm400 280v-80h104L536-366l58-58 126 128v-104h80v240H560Z"/>
    </Icon>
  );
};

IconMaterialArrowSplitFilled.displayName = 'OnesyIconMaterialArrowSplitFilled';

export default IconMaterialArrowSplitFilled;
