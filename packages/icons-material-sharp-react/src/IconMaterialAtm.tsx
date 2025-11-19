import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAtm = (props: IIcon) => {

  return (
    <Icon
      name='Atm'

      short_name='Atm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M415-360v-180h-90v-60h240v60h-90v180h-60Zm-335 0v-240h200v240h-60v-60h-80v60H80Zm60-120h80v-60h-80v60Zm480 120v-240h260v240h-60v-180h-40v140h-60v-140h-40v180h-60Z"/>
    </Icon>
  );
};

IconMaterialAtm.displayName = 'OnesyIconMaterialAtm';

export default IconMaterialAtm;
