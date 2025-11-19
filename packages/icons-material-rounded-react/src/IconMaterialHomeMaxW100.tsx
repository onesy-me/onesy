import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMaxW100 = (props: IIcon) => {

  return (
    <Icon
      name='HomeMaxW100'

      short_name='HomeMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-280h508q44 0 75-31t31-75v-188q0-44-31-75t-75-31H226q-44 0-75 31t-31 75v188q0 44 31 75t75 31Zm106 28H226q-56 0-95-39t-39-95v-188q0-56 39-95t95-39h508q56 0 95 39t39 95v188q0 56-39 95t-95 39H628q0 11-8.5 19.5T600-224H360q-11 0-19.5-8.5T332-252Zm148-228Z"/>
    </Icon>
  );
};

IconMaterialHomeMaxW100.displayName = 'OnesyIconMaterialHomeMaxW100';

export default IconMaterialHomeMaxW100;
