import { makeObservable, observable, action, computed } from 'mobx';

// 셀 데이터 타입 정의
interface CellData {
	text: string;
	subText: string;
	detail?: string;
	colorClass?: string;
	multiItems?: Array<{ text: string; subText: string }>;
}

// 사주 데이터 타입 정의
class SajuStore {
	// 테이블 헤더 (열)
	headers = ['時', '日', '月', '年'];

	// 행 라벨
	rowLabels = [
		{ text: '十星', subText: '십성' },
		{ text: '天干', subText: '천간' },
		{ text: '地支', subText: '지지' },
		{ text: '十星', subText: '십성' },
		{ text: '十二運星', subText: '십이운성' },
		{ text: '十二神殺', subText: '십이신살' },
		{ text: '貴人', subText: '귀인' },
	];

	// 기본 정보
	birthInfo = {
		year: 1980,
		month: 8,
		day: 27,
		time: '08:10',
		title: '김로켓님의 사주',
	};

	// 7행 × 4열 테이블 데이터
	tableData: CellData[][] = [
		// 첫 번째 십성 행
		[
			{ text: '傷官', subText: '상관' },
			{ text: '比肩', subText: '비견' },
			{ text: '傷官', subText: '상관' },
			{ text: '傷官', subText: '상관' },
		],
		// 천간 행
		[
			{ text: '壬', subText: '陽水', detail: '임', colorClass: 'type-1' },
			{ text: '丁', subText: '陰火', detail: '정', colorClass: 'type-2' },
			{ text: '癸', subText: '陰水', detail: '계', colorClass: 'type-1' },
			{ text: '癸', subText: '陰水', detail: '계', colorClass: 'type-1' },
		],
		// 지지 행
		[
			{ text: '寅', subText: '陽木', detail: '인', colorClass: 'type-3' },
			{ text: '巳', subText: '陰火', detail: '사', colorClass: 'type-2' },
			{ text: '亥', subText: '陰水', detail: '해', colorClass: 'type-1' },
			{ text: '酉', subText: '陰金', detail: '유', colorClass: 'type-4' },
		],
		// 두 번째 십성 행
		[
			{ text: '比肩', subText: '비견' },
			{ text: '劫財', subText: '겁재' },
			{ text: '食神', subText: '식신' },
			{ text: '偏財', subText: '편재' },
		],
		// 십이운성 행
		[
			{ text: '死', subText: '사' },
			{ text: '帝旺', subText: '제왕' },
			{ text: '胎', subText: '태' },
			{ text: '長生', subText: '장생' },
		],
		// 십이신살 행
		[
			{ text: '劫殺', subText: '겁살' },
			{ text: '地殺', subText: '지살' },
			{ text: '驛馬殺', subText: '역마살' },
			{ text: '將星殺', subText: '장성살' },
		],
		// 귀인 행
		[
			{ text: '(없음)', subText: '' },
			{ text: '(없음)', subText: '' },
			{ text: '天乙', subText: '천을귀인' },
			{
				text: '太極',
				subText: '태극귀인',
				multiItems: [
					{ text: '太極', subText: '태극귀인' },
					{ text: '文昌', subText: '문창귀인' },
					{ text: '天乙', subText: '천을귀인' },
				],
			},
		],
	];

	constructor() {
		makeObservable(this, {
			headers: observable,
			rowLabels: observable,
			birthInfo: observable,
			tableData: observable,
		});
	}

	// 컴포넌트에서 사용할 표시용 데이터 생성
	getDisplayData() {
		return {
			headers: this.headers,
			rowLabels: this.rowLabels,
			tableData: this.tableData,
			birthInfo: {
				title: this.birthInfo.title,
				date: `${this.birthInfo.year}년 ${this.birthInfo.month}월${this.birthInfo.day}일`,
				time: this.birthInfo.time,
			},
		};
	}
}

// 스토어 인스턴스 생성
const sajuStore = new SajuStore();

export default sajuStore;
