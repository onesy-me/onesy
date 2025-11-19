import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortFilled = (props: IIcon) => {

  return (
    <Icon
      name='SortFilled'

      short_name='Sort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/>
    </Icon>
  );
};

IconMaterialSortFilled.displayName = 'OnesyIconMaterialSortFilled';

export default IconMaterialSortFilled;
