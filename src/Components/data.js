/*export const surveyJson = {
  pages: [
    { elements: [{ type: 'radiogroup', name: 'q1', title: 'لو محدش بعتلك أو اتصل عليك لفترة بتحس بالضيق', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q2', title: 'ساعات بتخاف تقوم من السرير علشان متواجهش الدنيا أو الأقل الحاجات اللي وراك', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q3', title: 'ندمان لتضييع وقت كبير جدا في حاجات طلع قيمتها قليلة .', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q4', title: 'مشاكلك في الحياة معقدة ومتشابكة وملهاش حلول واضحة', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q5', title: 'احساس مش فارقة" كله زي بعلمه حاضر معاك كثير القارة دي .', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q6', title: 'مبتلحقش تفوق من الصدمات اللي ورا بعض', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q7', title: 'كثر الحاجات اللي عايز تعملها أو مع الدبق الوقت بيسببلك ضيق', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q8', title: 'كثير بنحس إن الناس مش فاهماك وإن طريقة تفكيرك بعبدة أو مختلفة عن طريقة تفكيرهم', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q9', title: 'احساس عدم الإنجاز مصاحب ليك كل أما بتشوف زمايلك حققوا إليه', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q10', title: 'دايما الظروف الحالية محلية الواحد متلخبط ومش عارف اللي جي إيه', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q11', title: 'مؤمن بقدرة رينا بس المشاكل في حالتك حلولها شبه مستحيلة', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q12', title: 'وراك شغل كثير بس مش قادر تعمله و لو عملته', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q13', title: ' عندك إحساس بالضيق من اللي بيحصل حواليك من الناس والأحداث', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q14', title: 'يتدخل في حاجات كتير بحماس البدايات بس مش بتكملها للأخر', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q15', title: 'بتخاف تقعد لوحدك وبتريح دماغك بالقعدة مع الناس حتى لو اتكلمتم في حاجة', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q16', title: 'النجاح شيء صعب جداً في ظل الظروف الموجودة حالياً، وفي الغالب مبيحصلش', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q17', title: ' معظم محاولاتك للنجاح قوبلت بعقبات كتير صعب تخطيها', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q18', title: 'فقدت القدرة على المواجهة في بعض المواقف في حياتك.', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q19', title: 'نسبة الرتابة في الحياة بقت عالية والأيام بنت شبه بعضها', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q20', title: 'النصايح بقت متكررة ومفيش نصيحة بتسمعها حاسس إنها ممكن تحسن من حياتك', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q21', title: 'دايما حاسس إنك مش هتلحق تحقق أهدافك', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q22', title: 'فقدانك لناس عزيزة عليك حسسك إن ظهر ممكن تسند عليه راح', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q23', title: 'بتحس إن حظك قليل في الدنيا', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q24', title: 'تعبت من كثر ما بتفشل في حاجات غيرك نجح فيها بسهولة', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q25', title: 'المشاكل بتحسسك إنك محبوس في مكان ضيق ومتكتف ومش لاقي مخرج', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q26', title: 'حاسس إن بتتعب بسرعة من غير سبب واضح', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q27', title: 'عندك أحلام وتطلعات كبيرة بس الواقع مش مساعدك تحققها', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q28', title: 'بتضايق لما بتلاقي حد سبقك أو حقق حاجة كنت بتحلم تحققها', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q29', title: 'أوقات كثيرة بتحس بأنك لوحدك وإنت وسط معارفك وأصحابك', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q30', title: 'شغفك قليل و مش عارف إيه اللي يرجعهولك', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q31', title: 'بتعاني إن اختياراتك في الغالب بتكون تكلفتها عالية ونتيجتها ضعيفة', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q32', title: 'بتحس إنك لازم ترضى بحاجات أقل من أحلامك وطموحاتك لأن ده قدرك', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q33', title: 'حاسس إنك عايز تقعد بس من غير ما تعمل حاجة فيها تحدي أو مسؤولية', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q34', title: 'مش عاجبك طريقة عيشتك وحاسس إنك معندكش مجهود كفاية تصلحها', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q35', title: 'كتير بتحس بالعجز وبتقف عن العمل تماماً من التشتت أعمل إيه ومعملش إيه', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q36', title: 'شايف حواليك الأحداث دايما بتزيد الموقف تعلية ونازم', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q37', title: 'دايما المرات اللي فشلت فيها بتكون قدام عينيك وبتسبب لك إزعاج و ضغط', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q38', title: 'دايما بتحب تشتغل مع اللي تعرفهم حتى لو كان العمل معاهم مش أفضل حاجة', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q39', title: 'دايما حاسس إن عملك وعلاقاتك ملهمش طعم', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q40', title: 'بتحس دايما إن المستقبل لازم تنظر له من جهة واحدة محددة وبتخاف متوصلش للجهة دي', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q41', title: 'كل ما يتفكر في مشروع أو حاجة تخلي لحياتك قيمة أو تسعدك تحس إنها أكبر من إمكانياتك ', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
    { elements: [{ type: 'radiogroup', name: 'q42', title: 'بتقول لنفسك السعادة شيء صعب الوصول إليه ومعظم الناس مش سعيدة فكله محصل بعضه... تريح نفسنا أحسن', choices: ['آه', 'لا', 'بتحصل'], isRequired: true, }] },
  ]
};
*/

export const surveyJson = {
  pages: [
    {
      elements: [
        {
          type: 'matrix',
          name: 'question',
          rowTitleWidth: '60%',
          columns: [
            'آه',
            'لا',
            'بتحصل'
          ],
          rows: [
            { value: 'q1', text: 'لو محدش بعتلك أو اتصل عليك لفترة بتحس بالضيق' },
            { value: 'q2', text: 'ساعات بتخاف تقوم من السرير علشان متواجهش الدنيا أو الأقل الحاجات اللي وراك' },
            { value: 'q3', text: 'ندمان لتضييع وقت كبير جدا في حاجات طلع قيمتها قليلة .' },
            { value: 'q4', text: 'مشاكلك في الحياة معقدة ومتشابكة وملهاش حلول واضحة' },
            { value: 'q5', text: 'احساس مش فارقة" كله زي بعلمه حاضر معاك كثير القارة دي .' },
            { value: 'q6', text: 'مبتلحقش تفوق من الصدمات اللي ورا بعض' },
            { value: 'q7', text: 'كثر الحاجات اللي عايز تعملها أو مع الدبق الوقت بيسببلك ضيق' },
            { value: 'q8', text: 'كثير بنحس إن الناس مش فاهماك وإن طريقة تفكيرك بعبدة أو مختلفة عن طريقة تفكيرهم' },
            { value: 'q9', text: 'احساس عدم الإنجاز مصاحب ليك كل أما بتشوف زمايلك حققوا إليه' },
            { value: 'q10', text: 'دايما الظروف الحالية محلية الواحد متلخبط ومش عارف اللي جي إيه' },
            { value: 'q11', text: 'مؤمن بقدرة رينا بس المشاكل في حالتك حلولها شبه مستحيلة' },
            { value: 'q12', text: 'وراك شغل كثير بس مش قادر تعمله و لو عملته' },
            { value: 'q13', text: ' عندك إحساس بالضيق من اللي بيحصل حواليك من الناس والأحداث' },
            { value: 'q14', text: 'يتدخل في حاجات كتير بحماس البدايات بس مش بتكملها للأخر' },
            { value: 'q15', text: 'بتخاف تقعد لوحدك وبتريح دماغك بالقعدة مع الناس حتى لو اتكلمتم في حاجة' },
            { value: 'q16', text: 'النجاح شيء صعب جداً في ظل الظروف الموجودة حالياً، وفي الغالب مبيحصلش' },
            { value: 'q17', text: ' معظم محاولاتك للنجاح قوبلت بعقبات كتير صعب تخطيها' },
            { value: 'q18', text: 'فقدت القدرة على المواجهة في بعض المواقف في حياتك.' },
            { value: 'q19', text: 'نسبة الرتابة في الحياة بقت عالية والأيام بنت شبه بعضها' },
            { value: 'q20', text: 'النصايح بقت متكررة ومفيش نصيحة بتسمعها حاسس إنها ممكن تحسن من حياتك' },
            { value: 'q21', text: 'دايما حاسس إنك مش هتلحق تحقق أهدافك' },
            { value: 'q22', text: 'فقدانك لناس عزيزة عليك حسسك إن ظهر ممكن تسند عليه راح' },
            { value: 'q23', text: 'بتحس إن حظك قليل في الدنيا' },
            { value: 'q24', text: 'تعبت من كثر ما بتفشل في حاجات غيرك نجح فيها بسهولة' },
            { value: 'q25', text: 'المشاكل بتحسسك إنك محبوس في مكان ضيق ومتكتف ومش لاقي مخرج' },
            { value: 'q26', text: 'حاسس إن بتتعب بسرعة من غير سبب واضح' },
            { value: 'q27', text: 'عندك أحلام وتطلعات كبيرة بس الواقع مش مساعدك تحققها' },
            { value: 'q28', text: 'بتضايق لما بتلاقي حد سبقك أو حقق حاجة كنت بتحلم تحققها' },
            { value: 'q29', text: 'أوقات كثيرة بتحس بأنك لوحدك وإنت وسط معارفك وأصحابك' },
            { value: 'q30', text: 'شغفك قليل و مش عارف إيه اللي يرجعهولك' },
            { value: 'q31', text: 'بتعاني إن اختياراتك في الغالب بتكون تكلفتها عالية ونتيجتها ضعيفة' },
            { value: 'q32', text: 'بتحس إنك لازم ترضى بحاجات أقل من أحلامك وطموحاتك لأن ده قدرك' },
            { value: 'q33', text: 'حاسس إنك عايز تقعد بس من غير ما تعمل حاجة فيها تحدي أو مسؤولية' },
            { value: 'q34', text: 'مش عاجبك طريقة عيشتك وحاسس إنك معندكش مجهود كفاية تصلحها' },
            { value: 'q35', text: 'كتير بتحس بالعجز وبتقف عن العمل تماماً من التشتت أعمل إيه ومعملش إيه' },
            { value: 'q36', text: 'شايف حواليك الأحداث دايما بتزيد الموقف تعلية ونازم' },
            { value: 'q37', text: 'دايما المرات اللي فشلت فيها بتكون قدام عينيك وبتسبب لك إزعاج و ضغط' },
            { value: 'q38', text: 'دايما بتحب تشتغل مع اللي تعرفهم حتى لو كان العمل معاهم مش أفضل حاجة' },
            { value: 'q39', text: 'دايما حاسس إن عملك وعلاقاتك ملهمش طعم' },
            { value: 'q40', text: 'بتحس دايما إن المستقبل لازم تنظر له من جهة واحدة محددة وبتخاف متوصلش للجهة دي' },
            { value: 'q41', text: 'كل ما يتفكر في مشروع أو حاجة تخلي لحياتك قيمة أو تسعدك تحس إنها أكبر من إمكانياتك ' },
            { value: 'q42', text: 'بتقول لنفسك السعادة شيء صعب الوصول إليه ومعظم الناس مش سعيدة فكله محصل بعضه... تريح نفسنا أحسن' },
          ],
          isAllRowRequired: true,
        }
      ]
    },
  ]
};