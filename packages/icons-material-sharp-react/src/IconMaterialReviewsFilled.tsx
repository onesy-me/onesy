import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReviewsFilled = (props: IIcon) => {

  return (
    <Icon
      name='ReviewsFilled'

      short_name='Reviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Zm283-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/>
    </Icon>
  );
};

IconMaterialReviewsFilled.displayName = 'OnesyIconMaterialReviewsFilled';

export default IconMaterialReviewsFilled;
