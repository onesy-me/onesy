import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeedbackFilled = (props: IIcon) => {

  return (
    <Icon
      name='FeedbackFilled'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm240-120q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm0-160q17 0 28.5-11.5T520-560v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 17 11.5 28.5T480-520Z"/>
    </Icon>
  );
};

IconMaterialFeedbackFilled.displayName = 'OnesyIconMaterialFeedbackFilled';

export default IconMaterialFeedbackFilled;
