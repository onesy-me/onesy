import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4kPlusFilled = (props: IIcon) => {

  return (
    <Icon
      name='4kPlusFilled'

      short_name='4kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-400h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60Zm-200 40h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-120 0h60v-60h40v-60h-40v-120h-60v120h-60v-120h-60v180h120v60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterial4kPlusFilled.displayName = 'OnesyIconMaterial4kPlusFilled';

export default IconMaterial4kPlusFilled;
