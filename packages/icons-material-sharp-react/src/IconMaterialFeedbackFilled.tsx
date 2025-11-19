import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedbackFilled = (props: IIcon) => {

  return (
    <Icon
      name='FeedbackFilled'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Zm400-280q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240Z"/>
    </Icon>
  );
};

IconMaterialFeedbackFilled.displayName = 'OnesyIconMaterialFeedbackFilled';

export default IconMaterialFeedbackFilled;
